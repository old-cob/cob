# Command Line Interface Wireframe

## Install

```shell
$ npm install --global cob
```

## Create a new website

```shell
$ cob new <website name>
```

## List websites

```shell
$ cob list
$ cob ls
```

## Start the website editor

If the user dosen't provide a website name, prompt you for one. Checkout [inquirer](https://github.com/SBoudrias/Inquirer.js).

```shell
$ cob start [website name]
```

## Delete a website

If the user dosen't provide a website name, prompt you for one. Double check before actually deleting.

```shell
$ cob remove 
$ cob rm
```

## Export a website

If the user dosen't provide a website name, prompt you for one.

```shell
$ cob export [website name]
```

