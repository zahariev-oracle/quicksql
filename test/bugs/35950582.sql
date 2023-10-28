-- create tables
create table team_members (
    id                             number generated by default on null as identity 
                                   constraint team_members_id_pk primary key,
    username                       varchar2(255 char)
)
;

create table projects (
    id                             number generated by default on null as identity 
                                   constraint projects_id_pk primary key,
    project_lead                   number
                                   constraint projects_project_lead_fk
                                   references team_members on delete cascade not null,
    name                           varchar2(255 char)
)
;

-- table index
create index projects_i1 on projects (project_lead);

-- load data
-- load data
 
insert into projects (
    id,
    project_lead,
    name
) values (
    1,
    1,
    'Corporate Portal'
);

insert into projects (
    id,
    project_lead,
    name
) values (
    2,
    1,
    'System Burst Performance Review'
);

commit;

alter table projects
modify id generated always  as identity restart start with 3;
 
 
-- Generated by Quick SQL Thursday October 26, 2023  21:59:23
 
/*
team_members
   username
projects /insert 2
   name
   project_lead /nn /references team_members

# settings = { semantics: "CHAR", language: "EN", APEX: true }
*/