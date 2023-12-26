#!/bin/bash

#сделать порт доступным
sudo firewall-cmd --add-port=3666/tcp
sudo firewall-cmd --reload

#запустить докер
sudo systemctl enable docker
sudo systemctl start docker

#собрать
sudo docker build -t myfilmslibrary .

