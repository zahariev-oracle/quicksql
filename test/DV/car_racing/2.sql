drop table driver cascade constraints;
drop table teaminfo cascade constraints;
drop table race cascade constraints;
drop table raceinfo cascade constraints;
-- create tables

create table raceInfo (
    raceId    number generated by default on null as identity
              constraint raceInfo_raceId_pk primary key,
    name      varchar2(255 char)
);

create table teamInfo (
    teamId    number generated by default on null as identity
              constraint teamInfo_teamId_pk primary key,
    name      varchar2(255 char)
);


create table driver (
    driverId       number generated by default on null as identity
                   constraint driver_driverId_pk primary key,
    teamInfo_id    number
                   constraint driver_teamInfo_id_fk
                   references teamInfo,
    name           varchar2(255 char),
    points         number
);

-- table index
create index driver_i1 on driver (teamInfo_id);




create table race (
    driverRaceMapId    number generated by default on null as identity
                       constraint race_driverRaceMapId_pk primary key,
    raceInfo_id        number
                       constraint race_raceInfo_id_fk
                       references raceInfo,
    driver_id          number
                       constraint race_driver_id_fk
                       references driver,
    finalPosition      number
);

-- table index
create index race_i1 on race (raceInfo_id);

create index race_i2 on race (driver_id);







-- create views
create or replace json relational duality view driver_dv as
select JSON {
  'driverId' : driver.driverId,
  'name' : driver.name,
  'points' : driver.points,
  'teamInfo' : [
    select JSON {
      'teamId' : teamInfo.teamId,
      'name' : teamInfo.name
     WITH NOCHECK } from teamInfo with INSERT UPDATE
    where teamInfo.null = driver.driverId
  ],
  'race' : [
    select JSON {
      'driverRaceMapId' : race.driverRaceMapId,
      'raceInfo' : [
        select JSON {
          'raceId' : raceInfo.raceId,
          'name' : raceInfo.name
         WITH NOCHECK } from raceInfo with INSERT UPDATE
        where raceInfo.null = race.driverRaceMapId
      ],
      'finalPosition' : race.finalPosition
     WITH NOCHECK } from race with INSERT UPDATE
    where race.driver_id = driver.driverId
  ]
} from driver with INSERT UPDATE DELETE;


-- load data

insert into raceInfo (
    raceId,
    name
) values (
    201,
    'Bahrain Grand Prix'
);

insert into raceInfo (
    raceId,
    name
) values (
    202,
    'Saudi Arabian Grand Prix'
);

commit;

insert into teamInfo (
    teamId,
    name
) values (
    301,
    'Red Bull'
);

commit;

insert into driver (
    driverId,
    teamInfo_id,
    name,
    points
) values (
    101,
    301,
    'Max Verstappen',
    258
);



commit;

insert into race (
    driverRaceMapId,
    raceInfo_id,
    driver_id,
    finalPosition
) values (
    3,
    201,
    101,
    19
);
insert into race (
    driverRaceMapId,
    raceInfo_id,
    driver_id,
    finalPosition
) values (
    11,
    202,
    101,
    1
);


commit;




