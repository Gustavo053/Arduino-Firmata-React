import React from "react";

function Examples() {
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
        <div className="col-md-12">
          <h3 className="my-4 text-sm-left">
            Exemplos de códigos para você executar e enviar para o arduino
          </h3>
          <h4 className="my-2 text-sm-left">Fazer um led piscar:</h4>
          <img className="img-fluid" src="./codigo.png" width="50%" />
          <p>
            <strong>Explicação do código:</strong> Primeiramente, é importado a
            biblioteca 'rubygems' e 'arduino_firmata'. Após isso, é feito a
            conexão do arduino através da porta <strong>ttyUSB0</strong>. É
            printado no terminal a versão do firmata. Logo em seguida é
            declarado que o pino 2 do arduino, irá ser um pino de{" "}
            <strong>saída.</strong> Então, uma variável state é declarada para
            assumir o estado do led(HIGH or LOW). O programa entra no loop que
            fica trocando o estado do led a cada 1 segundo.
          </p>
          <h4 className="my-2 text-sm-left">
            Acender um led pressionando um botão:
          </h4>
          <img className="img-fluid" src="./codigo2.png" width="50%" />
          <p>
            <strong>Explicação do código:</strong> Primeiramente, é importado a
            biblioteca 'rubygems' e 'arduino_firmata'. Após isso, é feito a
            conexão do arduino através da porta <strong>ttyUSB0</strong>. É
            printado no terminal a versão do firmata. Logo em seguida, é
            declarado que o pino 7 do arduino irá ser um pino de{" "}
            <strong>entrada</strong> e o pino 2 irá ser um de{" "}
            <strong>saída.</strong> Então o programa entra em um loop, onde a
            condição que testa se o botão foi apertado é verificada. Se ela
            retornar true, então o pino 2 é setado como true(HIGH), senão, ele
            fica setado como false(LOW).
          </p>
          <h4 className="my-2 text-sm-left">
            Controlar o brilho do led através de um potenciômetro:
          </h4>
          <img className="img-fluid" src="./codigo3.png" width="50%" />
          <p>
            <strong>Explicação do código:</strong> Primeiramente, é importado a
            biblioteca 'rubygems' e 'arduino_firmata'. Após isso, é feito a
            conexão do arduino através da porta <strong>ttyUSB0</strong>. É
            printado no terminal a versão do firmata. Então o programa entra em
            um loop, onde uma variável que recebe o valor de acordo com a
            movimentação do eixo do potenciômetro é printada no terminal a cada
            0.1s. No pino 10, onde o led está ligado, é aceso o led com o valor
            ajustado para uma escala de <strong>8 bits</strong>, visto que o
            valor recebido está em uma escala de <strong>10 bits.</strong>
          </p>
          <h4>Gostou desses exemplos?</h4>
          <p>
            Se você gostou desses exemplos, com certeza vai gostar de saber o
            que esse framework é capaz de fazer. Visite o{" "}
            <a
              target="_blank"
              href="https://github.com/Gustavo053/Ruby-connected-to-the-Arduino"
            >
              Github
            </a>{" "}
            de <i>Gustavo Pereira</i> para ter acesso a esses exemplos simples,
            ou acesse o{" "}
            <a target="_blank" href="https://github.com/shokai/arduino_firmata">
              Github
            </a>{" "}
            oficial do framework para obter mais exemplos.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Examples;
