import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import ContadorClick from './components/contador/ContadorClick'
import Mega from './components/mega/Mega'

export default () => (

    <div className="App">
        <h1>Fundamentos reácticos</h1>
        <div className="Cards">
            <Card titulo='#12 - Mega sena' color="#e45b99">
                <Mega />
            </Card>                
            <Card titulo='#11 - Contador click' color="#e45b99">
                <ContadorClick />
            </Card>              
            {/* <Card titulo='#10 - Contador' color="#e45b99">
                <Contador numeroInicial={10}></Contador>
            </Card>                         */}
            <Card titulo='#09 - Componente controlado' color="#e45b00">
                <Input />
            </Card>            
            <Card titulo='#08 - Paroimpar' color="#6b5b95">
                <ParOuImpar numero={983453} />
                <UsuarioInfo usuario={{nome: "Ta Zé Maluco da Silva"}} />
                <UsuarioInfo usuario={{apilido: "Tazmaluco da Silva"}} />
            </Card>
            <Card titulo='#07 - Produtos' color="#891">
                <TabelaProdutos />
            </Card>
            <Card titulo='#06 - Repetição' color="#FF4C65">
                <ListaAlunos />
            </Card>            
            <Card titulo='#05 - Componente com filhos' color="#08C8F8">
                <Familia sobrenome="Suiper">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo='#04 - Desafio aleatório' color="#FA6900">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo='#03 - Fragmento' color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo='#02 - Com parametro' color="#E8B71A">
                <ComParametro 
                titulo="Situação do Aluno"
                aluno="Pedro Silva" nota={9.9}/>    
                <ComParametro 
                titulo="Situação do Aluno"
                aluno="Vagabundo" nota={2.1}/>                
            </Card>
            <Card titulo='#01 - Primeiro' color="#588c73">
                <Primeiro />
            </Card>
        </div>
        
    </div>
    )


