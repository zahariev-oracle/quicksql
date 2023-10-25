-- create tables
create table departments (
    id                             number generated by default on null as identity 
                                   constraint departments_id_pk primary key,
    name                           varchar2(255 char),
    location                       varchar2(255 char),
    country                        varchar2(255 char)
)
;

create table employees (
    id                             number generated by default on null as identity 
                                   constraint employees_id_pk primary key,
    department_id                  number
                                   constraint employees_department_id_fk
                                   references departments ,
    name                           varchar2(255 char),
    email                          varchar2(255 char),
    job                            varchar2(255 char),
    hiredate                       date
)
;

-- table index
create index employees_i1 on employees (department_id);


-- REST ENABLE tables using Oracle REST Data Services (ORDS)
begin
    ords.enable_object(p_enabled=>TRUE, p_object=>'departments');
end;
/

begin
    ords.enable_object(p_enabled=>TRUE, p_object=>'employees');
end;
/