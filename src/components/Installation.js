import React from "react";

function Installation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="my-4 text-sm-left">Arduino</h1>
          <div className="text-sm-left">
            <img className="img-fluid" src="./images/arduino.png" width="50%" alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="my-4 text-sm-center">Firmata</h1>
          <div className="text-sm-center">
            <img className="img-fluid" src="./images/firmata.png" width="50%" alt="" />
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
          <h1 className="my-4 text-sm-center">Atenção!</h1>
          <div className="text-sm-center">
            <img className="img-fluid" src="./images/warning.png" width="11%" />
          </div>
          <h4 className="my-2 text-sm-left">
            É importante você ter algumas coisas já instaladas para
            continuarmos:
          </h4>
          <ul>
            <li>
              Instale o gort: <strong>sudo apt install gort</strong>
            </li>
            <li>
              Instale o gem: <strong>sudo apt install gem</strong>
            </li>
            <li>
              Atualize os pacotes: <strong>sudo gem install update</strong>
            </li>
            <li>
              Atualize os diretórios: <strong>sudo gem install upgrade</strong>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4 text-sm-center">Instalação do Ruby</h1>
          <div className="text-sm-center">
            <img className="img-fluid" src="./images/ruby.png" width="10%" alt="" />
          </div>
          <h4 className="my-3 text-sm-left">
            Siga esses simples passo a passo e você terá o ruby na sua máquina:
          </h4>
          <ol>
            <li>
              Instale o ruby na sua máquina:{" "}
              <strong>sudo apt install ruby-full</strong>
            </li>
            <li>
              Caso necessário, execute:{" "}
              <strong>sudo apt install ruby essential</strong>
            </li>
            <li>
              Instale o gerenciador de pacotes do ruby:{" "}
              <strong>sudo gem install rubygems</strong>
            </li>
          </ol>
          <p>Pronto, o ruby já está instalado na sua máquina.</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4 text-sm-center">Instalação da IDE Arduino</h1>
          <div className="text-sm-center">
            <img className="img-fluid" src="./images/firmata.png" width="13%" alt="" />
          </div>
          <h4 className="my-3 text-sm-left">
            Siga esses simples passo a passo e você terá a IDE Arduino na sua
            máquina:
          </h4>
          <p>
            A IDE Arduino é fácil de ser instalada e pode ser obtida através do
            link:{" "}
            <a target="_blank" href="https://www.arduino.cc/">
              https://www.arduino.cc
            </a>
          </p>
          <p>
            Entretanto, você pode usar o seguinte comando no terminal para
            instalar também: <strong>sudo apt install arduino</strong>
          </p>
          <p>Pronto, a IDE Arduino já está em sua máquina.</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4 text-sm-center">
            Instalação do framework Arduino_Firmata
          </h1>
          <div className="text-sm-center">
            <img
              className="img-fluid"
              src="./images/rubygems.png"
              width="11%"
              alt=""
            />
          </div>
          <h4 className="my-3 text-sm-left">
            Siga esses simples passo a passo e você terá o framework na sua
            máquina:
          </h4>
          <ol>
            <li>
              Instale o framework na sua máquina:{" "}
              <strong>sudo gem install arduino_firmata</strong>
            </li>
            <li>
              <strong>Atenção:</strong> tente conectar o arduino com o ruby,
              caso não funcione, execute e tente novamente:{" "}
              <strong>sudo gem install arduino</strong>
            </li>
          </ol>
          <p>
            Você pode consultar e saber mais no link:{" "}
            <a target="_blank" href="https://rubygems.org/gems/arduino_firmata">
              https://rubygems.org/gems/arduino_firmata
            </a>
          </p>
          <p>
            Sobre versões:{" "}
            <a
              target="_blank"
              href="https://rubygems.org/gems/arduino_firmata/versions"
            >
              https://rubygems.org/gems/arduino_firmata/versions
            </a>
          </p>
          <p>Pronto, o framework já está em sua máquina.</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4 text-sm-center">
            Configurando o ambiente de desenvolvimento
          </h1>
          <div className="text-sm-center">
            <img className="img-fluid" src="./images/vscode.png" width="11%" alt="" />
          </div>
          <h4 className="my-3 text-sm-left">
            Siga esses simples passos e você terá o seu ambiente instalado e
            configurado:
          </h4>
          <p>
            Nós aconselhamos a você usar o Ambiente de Desenvolvimento
            desenvolvido pela Microsoft Corporation, o{" "}
            <strong>Visual Studio Code.</strong>
          </p>
          <p>
            Você pode obter ele através do link:{" "}
            <a href="https://code.visualstudio.com/">
              https://code.visualstudio.com
            </a>
          </p>
          <p>
            Entretanto, você pode instalar o VS Code via terminal usando os
            seguintes comandos:
          </p>
          <ol>
            <li>
              Instale o snap: <strong>sudo apt install snap</strong>
            </li>
            <li>
              Instale o VS Code através do snap:{" "}
              <strong>sudo snap install code</strong>
            </li>
          </ol>
          <p>Pronto, o seu ambiente já está instalado.</p>
        </div>
      </div>
      <h4 className="my-3 text-sm-left">
        Agora, vamos configurar o seu Ambiente de Desenvolvimento. Siga os
        passos:
      </h4>
      <ol>
        <li>
          Abra o seu VS Code e pesquise pela extensão do ruby. Basta pesquisar{" "}
          <strong>ruby.</strong>
        </li>
      </ol>
      <img className="img-fluid" src="./images/installationVS.PNG" width="100%" />
      <p>
        Agora basta instalar essa extensão e pronto, o seu ambiente está
        configurado para codificar na lingaugem <strong>ruby.</strong>
      </p>
      <hr />
    </div>
  );
}

export default Installation;
