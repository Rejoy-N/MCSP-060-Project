// package Product for managing product data 
package main

// import packages
import (
	"database/sql"
	"encoding/json"
	_ "github.com/mattn/go-sqlite3"
	uuid "github.com/satori/go.uuid"
)

// Product Model
type Product struct {
	Puid     string            `valid:"required,uuidv4"`
	Pname    string            `valid:"required,alphanum"`
	Quantity string            `valid:"required,numeric"`
	Price    string            `valid:"required,numeric"`
	Image    string            `valid:"-"`
	Errors   map[string]string `valid:"-"`
}


// function SaveProductData saves admin user entered Product data that is validated  to the database 
func SaveProductData(p *Product) error {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	db.Exec("create table if not exists products (puid text not null unique, pname text not null, quantity text not null, price text not null , image text, primary key(puid))")
	tx, _ := db.Begin()
	stmt, _ := tx.Prepare("insert into products (puid, pname, quantity, price, image ) values (?, ?, ?, ? , ? )")
	_, err := stmt.Exec(p.Puid, p.Pname, p.Quantity, p.Price, p.Image)
	tx.Commit()
	return err
}

// function ProductExists is used to retrieve the Puid and Name parameter values of product information for the specific product from the database 
func ProductExists(p *Product) (bool, string) {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	var pid, pn string
	q, err := db.Query("select puid, pname from products where pname = '" + p.Pname + "'")
	if err != nil {
		return false, ""
	}
	for q.Next() {
		q.Scan(&pid, &pn)
	}
	if pid != "" && pn != "" {
		return true, pid
	}
	return false, ""
}

// function CheckProduct is used to check if product information for the specific product exists in the database using the name parameter
func CheckProduct(product string) bool {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	var pr string
	q, err := db.Query("select product from products where pname = '" + product + "'")
	if err != nil {
		return false
	}
	for q.Next() {
		q.Scan(&pr)
	}
	if pr == product {
		return true
	}
	return false
}

//function GetProductFromPuid is used to retrieve from the database product information corresponding to the Product UUID  
func GetProductFromPuid(puid string) *Product {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	var pid, product, quantity, price, image string
	q, err := db.Query("select * from products where puid = '" + puid + "'")
	if err != nil {
		return &Product{}
	}
	for q.Next() {
		q.Scan(&pid, &product, &quantity, &price, &image)
	}
	return &Product{Pname: product, Quantity: quantity, Price: price, Image: image}
}

// function Puid is used to generate the UUID string for a new product
func Puid() string {
	id := uuid.NewV4()
	return id.String()
}


// function GetProduct is used to retrieve from the database the entire product table and encode it to JSON
func GetProduct() ([]byte, error) {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	db.Exec("create table if not exists delprod (puid text not null unique, primary key(puid))")
	// var pid, product, quantity, price, image string
	rows, err := db.Query("select * from products where not exists (select delprod.puid from delprod where products.puid = delprod.puid)")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	columns, err := rows.Columns()
	if err != nil {
		return nil, err
	}
	count := len(columns)
	tableData := make([]map[string]interface{}, 0)
	values := make([]interface{}, count)
	valuePtrs := make([]interface{}, count)
	for rows.Next() {
		for i := 0; i < count; i++ {
			valuePtrs[i] = &values[i]
		}
		rows.Scan(valuePtrs...)
		entry := make(map[string]interface{})
		for i, col := range columns {
			var v interface{}
			val := values[i]
			b, ok := val.([]byte)
			if ok {
				v = string(b)
			} else {
				v = val
			}
			entry[col] = v
		}
		tableData = append(tableData, entry)
	}
	jsonData, err := json.Marshal(tableData)
	if err != nil {
		return nil, err
	}
		return jsonData, nil
}

// function DeleteProductData saves admin user deleted Product data that is validated  to the database 
func DeleteProductData(pid string) error {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	// db.Exec("create table if not exists delprod (puid text not null unique, primary key(puid))")
	tx, _ := db.Begin()
	stmt, _ := tx.Prepare("insert into delprod (puid) values (?)")
	_, err := stmt.Exec(pid)
	tx.Commit()
	return err
}


// function UpdateProductData saves admin user entered Product data that is validated  to the database 
func UpdateProductData(p *Product) error {
	var db, _ = sql.Open("sqlite3", "cache/users.sqlite3")
	defer db.Close()
	tx, _ := db.Begin()
	// stmt, _ := tx.Prepare("REPLACE INTO products (pname, quantity, price, image ) values (?, ?, ?, ? ) where products.puid = '" + p.Puid + "'")
	stmt, _ := tx.Prepare("REPLACE INTO products (puid, pname, quantity, price, image ) values (?, ?, ?, ?, ? )")
	_, err := stmt.Exec(p.Puid, p.Pname, p.Quantity, p.Price, p.Image)
	tx.Commit()
	return err
}

