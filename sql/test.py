import sqlite3
con = sqlite3.connect('test.db')

cur = con.cursor()
#cur.execute('CREATE TABLE movie(title, year, score)')
#cur.execute("INSERT INTO movie VALUES ('Coraline', 2000, 9.0)")
con.commit()

res = cur.execute('SELECT title, score FROM movie')
print(res.fetchall())
print("\n")
res = cur.execute('SELECT title, score FROM movie')
print(res.fetchone())
print("\n")

for row in cur.execute("SELECT year, title FROM movie ORDER BY year"):
    print(row)
    
