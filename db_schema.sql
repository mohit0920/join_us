drop database if exists join_us;

create database join_us;
use join_us;

create table users (
  email varchar(255) not null primary key ,
  created_at timestamp not null default now()
);

