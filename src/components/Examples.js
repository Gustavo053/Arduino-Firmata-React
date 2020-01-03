import React from "react";

function Examples() {
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
          <h3 className="my-4 text-sm-left">
            Exemplos de códigos para você executar e enviar para o arduino
          </h3>
          <h4 className="my-2 text-sm-left">Fazer um led piscar:</h4>
          <table className="table-active">
            <tbody>
              <tr>
                <td>
                  <div>
                    <code>require 'rubygems'</code>
                  </div>
                  <div>
                    <code>require 'arduino_firmata'</code>
                  </div>
                  <br />
                  <div>
                    <code>arduino = ArduinoFirmata.connect "/dev/ttyUSB0"</code>
                  </div>
                  <br />
                  <div>
                    <code>#ACENDER E DESLIGAR O LED</code>
                  </div>
                  <br />
                  <div>
                    <code>arduino.pin_mode 2, ArduinoFirmata::OUTPUT</code>
                  </div>
                  <div>
                    <code>stat = true</code>
                  </div>
                  <div>
                    <code>loop do</code>
                  </div>
                  <div>
                    <code>puts stat</code>
                  </div>
                  <div>
                    <code>arduino.digital_write 2, stat</code>
                  </div>
                  <div>
                    <code>stat = !stat</code>
                  </div>
                  <div>
                    <code>sleep 1</code>
                  </div>
                  <div>
                    <code>end</code>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Explicação do código:</strong> Primeiramente, é importado a
            biblioteca 'rubygems' e 'arduino_firmata'. Após isso, é feito a
            conexão do arduino através da porta <strong>ttyUSB0</strong>. Logo
            em seguida é declarado que o pino 2 do arduino, irá ser um pino de{" "}
            <strong>saída.</strong> Então, uma variável state é declarada e
            inicializada para assumir o estado do led(HIGH or LOW). O programa
            entra no loop que fica trocando o estado do led a cada 1 segundo.
          </p>
          <h4 className="my-2 text-sm-left">
            Acender um led pressionando um botão:
          </h4>
          <table className="table-active">
            <tbody>
              <tr>
                <td>
                  <div>
                    <code>require 'rubygems'</code>
                  </div>
                  <div>
                    <code>require 'arduino_firmata'</code>
                  </div>
                  <br />
                  <div>
                    <code>arduino = ArduinoFirmata.connect "/dev/ttyUSB0"</code>
                  </div>
                  <br />
                  <div>
                    <code>#ACENDER E DESLIGAR O LED COM BOTÃO</code>
                  </div>
                  <br />
                  <div>
                    <code>arduino.pin_mode 7, ArduinoFirmata::INPUT</code>
                  </div>
                  <div>
                    <code>arduino.pin_mode 2, ArduinoFirmata::OUTPUT</code>
                  </div>
                  <br />
                  <div>
                    <code>loop do</code>
                  </div>
                  <div>
                    <code>if arduino.digital_read 7</code>
                  </div>
                  <div>
                    <code>arduino.digital_write 2, true</code>
                  </div>
                  <div>
                    <code>else</code>
                  </div>
                  <div>
                    <code>arduino.digital_write 2, false</code>
                  </div>
                  <div>
                    <code>end</code>
                  </div>
                  <div>
                    <code>sleep 0.5</code>
                  </div>
                  <div>
                    <code>end</code>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Explicação do código:</strong> Primeiramente, é importado a
            biblioteca 'rubygems' e 'arduino_firmata'. Após isso, é feito a
            conexão do arduino através da porta <strong>ttyUSB0</strong>. Logo
            em seguida, é declarado que o pino 7 do arduino irá ser um pino de{" "}
            <strong>entrada</strong> e o pino 2 irá ser um de{" "}
            <strong>saída.</strong> Então o programa entra em um loop, onde a
            condição que testa se o botão foi apertado é verificada. Se ela
            retornar true, então o pino 2 é setado como true(HIGH), senão, ele
            fica setado como false(LOW).
          </p>
          <h4 className="my-2 text-sm-left">
            Controlar o brilho do led através de um potenciômetro:
          </h4>
          <table className="table-active">
            <tbody>
              <tr>
                <td>
                  <div>
                    <code>require 'rubygems'</code>
                  </div>
                  <div>
                    <code>require 'arduino_firmata'</code>
                  </div>
                  <br />
                  <div>
                    <code>arduino = ArduinoFirmata.connect "/dev/ttyUSB0"</code>
                  </div>
                  <br />
                  <div>
                    <code>
                      #LIGAR O LED E AJUSTAR O SEU BRILHO COM O POTENCIÔMETRO
                    </code>
                  </div>
                  <br />
                  <div>
                    <code>loop do</code>
                  </div>
                  <div>
                    <code>
                      an = arduino.analog_read 0 #Retorna entre 0 e 1023
                      (10bist)
                    </code>
                  </div>
                  <div>
                    <code>puts an</code>
                  </div>
                  <div>
                    <code>
                      arduino.analog_write 10, an/4 #Ajusta para a escala de 0 a
                      255 (8bits) do pwm
                    </code>
                  </div>
                  <div>
                    <code>sleep 0.1</code>
                  </div>
                  <div>
                    <code>end</code>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Explicação do código:</strong> Primeiramente, é importado a
            biblioteca 'rubygems' e 'arduino_firmata'. Após isso, é feito a
            conexão do arduino através da porta <strong>ttyUSB0</strong>. Então
            o programa entra em um loop, onde uma variável que recebe o valor de
            acordo com a movimentação do eixo do potenciômetro é printada no
            terminal a cada 0.1s. No pino 10, onde o led está ligado, é aceso o
            led com o valor ajustado para uma escala de <strong>8 bits</strong>,
            visto que o valor recebido está em uma escala de{" "}
            <strong>10 bits.</strong>
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
