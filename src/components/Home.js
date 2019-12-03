import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="my-4 text-sm-left">Arduino</h1>
          <div className="text-sm-left">
            <img
              className="img-fluid"
              src="./images/arduino.png"
              width="50%"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="my-4 text-sm-center">Firmata</h1>
          <div className="text-sm-center">
            <img
              className="img-fluid"
              src="./images/firmata.png"
              width="50%"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="my-4 text-sm-right">Ruby</h1>
          <div className="text-sm-right">
            <img
              className="img-fluid"
              src="./images/ruby.png"
              width="41%"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h3 className="my-3">Arduino</h3>
          <p>
            Arduino é uma plataforma de prototipagem eletrônica de hardware
            livre e de placa única, projetada com um microcontrolador Atmel AVR
            com suporte de entrada/saída embutido, uma linguagem de programação
            padrão, a qual tem origem em Wiring, e é essencialmente C/C++.
          </p>
          <h3 className="my-3">Firmata</h3>
          <p>
            Firmata é um protocolo para comunicação com microcontroladores a
            partir de software em um computador (ou smartphone / tablet, etc.).
            O protocolo pode ser implementado em firmware em qualquer
            arquitetura de microcontrolador, bem como software em qualquer
            pacote de software de computador.
          </p>
          <h3 className="my-3">Ruby</h3>
          <p>
            Ruby é uma linguagem de programação interpretada multiparadigma, de
            tipagem dinâmica e forte, com gerenciamento de memória automático,
            originalmente planejada e desenvolvida no Japão em 1995, por
            Yukihiro "Matz" Matsumoto, para ser usada como linguagem de script.
          </p>
          <h3 className="my-3">Aqui você aprenderá</h3>
          <ul>
            <li>
              A instalar a linguagem ruby, a IDE Arduino e o framework
              arduino_firmata da rubygems.
            </li>
            <li>
              A configurar o seu arduino para ele receber comandos do framework.
            </li>
            <li>
              A configurar o framework para enviar comandos via serial para o
              arduino.
            </li>
            <li>
              A mandar ações à serem executadas pelo arduino através da
              linguagem ruby.
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
