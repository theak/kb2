#!/bin/sh
export AWS_ACCESS_KEY_ID='AKIAJUZ6GGMCUX3PQXXA'
export AWS_SECRET_ACCESS_KEY='wZ19YCOAAMyw0Auvixb+Obu3btasDWMVR8QjEm4D'

mkdir -p bin
if ! type "aws" > /dev/null 2> /dev/null; then
  echo "installing awscli- please enter your sudo password:"
  sudo pip install awscli
fi

# Remove useless files
#find . -name ".DS_Store" | xargs rm
#find . -name "*~" | xargs rm

aws s3 cp . s3://kb-sound/ --recursive --exclude *~ --exclude ".git*"