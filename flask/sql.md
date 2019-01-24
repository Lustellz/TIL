# D16 Workshop

```sql
create table bands(
id integer primary key autoincrement,
name text not null

debut int not null
);
```

```sql
alter table bands add column members int;
update bands set members=4 where id=1;
update bands set members=5 where id=2;
update bands set members=9 where id=3;
```

```sql
update badns set members=5 where id=3;
```

```sql
delete from bands where id=2;
```

