-- create tables

create table customers (
    id            number generated by default on null as identity
                  constraint customers_id_pk primary key,
    first_name    varchar2(4000 char)
);

create table product (
    id      number generated by default on null as identity
            constraint product_id_pk primary key,
    name    varchar2(255 char)
);

create table sales (
    id              number generated by default on null as identity
                    constraint sales_id_pk primary key,
    product_id      number
                    constraint sales_product_id_fk
                    references product,
    customers_id    number
                    constraint sales_customers_id_fk
                    references customers,
    quantity        varchar2(4000 char)
);

-- table index
create index sales_i1 on sales (product_id);

create index sales_i2 on sales (customers_id);









-- load data

insert into customers (
    id,
    first_name
) values (
    1,
    'Cornelia'
);

commit;

insert into product (
    id,
    name
) values (
    1,
    'Matilda Spencer'
);

commit;



insert into sales (
    id,
    product_id,
    customers_id,
    quantity
) values (
    1,
    7,
    52,
    'N/A'
);
insert into sales (
    id,
    product_id,
    customers_id,
    quantity
) values (
    2,
    10,
    90,
    'N/A'
);

commit;

alter table sales
modify id generated always  as identity restart start with 3;


-- Generated by Quick SQL undefined 10/4/2023, 12:26:53 PM

/*
sales    /insert 2
    quantity
    > product   /insert 1
         name
    > customers  /insert 1
         first name 

       



--- Non-default options:
# settings = {}

*/
