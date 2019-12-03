import React from "react";

function Connection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="my-4 text-sm-left">Arduino</h1>
          <div className="text-sm-left">
            <img className="img-fluid" src="./arduino.png" width="50%" alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="my-4 text-sm-center">Firmata</h1>
          <div className="text-sm-center">
            <img className="img-fluid" src="./firmata.png" width="50%" alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="my-4 text-sm-right">Ruby</h1>
          <div className="text-sm-right">
            <img
              className="img-fluid"
              src="./ruby.png"
              width="41%"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <h3 className="my-3">
          Programando o arduino para receber comandos via serial
        </h3>
        <p>
          Para conectarmos o arduino com o ruby, primeiramente você tem que
          enviar o código do procotolo <strong>Firmata</strong> para a placa,
          assim ela irá receber comandos via serial. Para fazer isso, siga os
          passos:
        </p>
        <ol>
          <li>Conecte o arduino no seu computador.</li>
          <li>Abra a sua IDE Arduino.</li>
          <li>
            Vá em <strong>ferramentas</strong> e selecione a sua placa como
            sendo <strong>Arduino Uno.</strong>
          </li>
          <li>
            Selecione a porta em que a placa está na opção{" "}
            <strong>porta</strong> (geralmente ela é identificada como ttyUSB0).
          </li>
          <li>
            Vá na opção <strong>Arquivos</strong>, selecione a opção{" "}
            <strong>Exemplos</strong> e vá até a opção{" "}
            <strong>StandardFirmata.</strong>
          </li>
          <li>
            Envie para a placa o código que foi gerado quando você clicou na
            opção.
          </li>
        </ol>
        <p>
          Após realizar esses passos, a sua placa estará "escutando" comandos
          que serão enviados via serial, pois o código do{" "}
          <strong>StandardFirmata</strong> fica rodando na placa e permite que
          comandos via serial sejam passados e executados na placa.
        </p>
        <h3 className="my-3">Realizando a conexão do ruby e o arduino</h3>
        <ol>
          <li>Monte esse circuito:</li>
          <img className="img-fluid" src="./BlinkLed2.png" width="70%" />
          <li>
            Abra o terminal e insira o comando:{" "}
            <strong>gort scan serial</strong>
          </li>
          <li>
            Veja a porta que a placa está conectada (geralmente ela é
            identificada como <strong>ttyUSB0</strong>).
          </li>
          <li>
            Abra o VS Code e crie um arquivo com o nome{" "}
            <strong>blink_led.rb</strong>, por exemplo.
          </li>
          <li>Insira o seguinte código:</li>
          <img className="img-fluid" src="./codigo.png" width="100%" />
          <li>
            Abra o terminal do VS Code e execute o código:{" "}
            <strong>ruby blink_led.rb</strong>
          </li>
          <li>Veja o resultado: </li>
          <img className="img-fluid" src="./BlinkLed.gif" width="70%" />
        </ol>
        <p>
          Pronto! A conexão do ruby com o arduino através do framework foi
          realizada com sucesso. Agora você pode fazer diferentes circuitos e
          executar o código através do ruby. Para mais exemplos, vá até a aba{" "}
          <strong>Exemplos.</strong>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Connection;
