import axios from "axios";
import React from 'react'

const URLs = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/'

function Cadastro (){
const promise = axios.post(`${URLs}/sign-up`)
return promise;
}

function Login (logim){
const promise = axios.post(`${URLs}/login`, logim)
return promise;
} 

function CriarHabito ( ){
const promise = axios.post(`${URLs}/habits`)
return promise;
}

function ListarHabitos ( ){
const promise = axios.get(`${URLs}/habits`)
return promise;
}

function DeletarHabitos ( ){
const promise = axios.delete(`${URLs}/ID_DO_HABITO`)
return promise;
}

function BuscarHabitos (config){
const promise = axios.get(`${URLs}/habits/today`, config)
return promise;
}

function MarcarHabitos ( ){
const promise = axios.post(`${URLs}/ID_DO_HABITO/check`)
return promise;
}

function DesmarcarHabitos ( ){
const promise = axios.post(`${URLs}/ID_DO_HABITO/uncheck`)
return promise;
}

function HistoricoHabitos ( ){
const promise = axios.get(`${URLs}/daily`)
return promise;
}

export {Cadastro, Login, CriarHabito, ListarHabitos, DeletarHabitos, BuscarHabitos, MarcarHabitos, DesmarcarHabitos, HistoricoHabitos } 