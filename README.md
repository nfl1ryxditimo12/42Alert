<img width="600" alt="42alert" src="https://user-images.githubusercontent.com/74334399/147906064-dd87f8e4-7577-4a0a-98ae-bd34d242d8a9.png">

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat-square&logo=Mysql&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/aws-232F3E?style=flat-square&logo=aws&logoColor=white">&nbsp
</p>

<br/>

π¨ μλ‘μ΄ Agenda μ΄λ²€νΈλ₯Ό μ¬λμΌλ‘ λ³΄λ΄λλ €μ <br/>

`Heroku` μ `Node.js` λ₯Ό μ΄μ©ν ν μ΄ νλ‘μ νΈ μλλ€.

<br/>

π [42Alert νλ‘μ νΈ κ°λ°κΈ°](https://seongsu.me/42alert-retrospective) π

<br/>

### 2022-05-11 μμ  λ΄μ­

- ν€λ‘μΏ  λ³΄μ λ¬Έμ λ‘ μΈν΄ AWS EC2λ‘ μλ² μ΄μ 
- API νμ± 5μ΄ -> 3μ΄
- `Event`, `Exam` μ΄λͺ¨ν°μ½ μ­μ 

<br/>

## π­ κΈ°μ‘΄ μ±λμμ λ°μλ³΄κΈ°

λ°λ‘ μν¬μ€νμ΄μ€λ₯Ό λ§λ€μ§ μμλ μ¬μ© κ°λ₯ν©λλ€<br/>
λ©ν λλ€μ΄ μ΄μνμλ [42seoul_cuckoo](http://42seoul.io/cuckoo) κ°μ ν #agenda-alert μ±λ λ±λ‘!<br/>

<br/>

## π Quick Start

### 1. νλ‘μ νΈ μμ

```SHELL
# yarnμΌλ‘ μμν΄ μ£ΌμΈμ
$ yarn install
λλ
$ yarn
```

> λ§μ½ `yarn`μ μ¬μ©νκ³  μμ§ μλ€λ©΄, μ€μΉλ₯Ό μ§νν΄ μ£ΌμΈμ

```SHELL
$ npm install --global yarn
```

<br/>

### 2. νκ²½λ³μ μ€μ μ ν΄μ£ΌμΈμ

μ²¨λΆλΌ μλ `.env.sample`νμΌμ μ°Έκ³ ν΄ `.env.dev`νμΌμ μμ±ν΄ μ£ΌμΈμ.<br/>
- `SLACK_TOKEN`μλ μ¬λ λ΄μ OAuth Tokenμ λ£μ΄μΌ ν©λλ€.<br/>
- `SLACK_CHENNAL`μλ μνλ μν¬μ€νμ΄μ€ μμ μ±λ μ΄λ¦μ μ μ΄μ£Όμλ©΄ λ©λλ€.

<br/>

### 3. μ΄μ  μνλ μ¬λ μν¬μ€νμ΄μ€μμ μλ¦Ό μλΉμ€λ₯Ό λ°μ λ³Ό μ μμ΅λλ€.

```SHELL
# yarn startλ production νκ²½μμ μ¬μ©ν©λλ€.
$ yarn dev
```

> μ΄μ μ κΌ­ Slack Bot OAuth Tokenμ λ°κΈ λ°κ³  μ¬μ©ν΄μΌ ν©λλ€.<br/>
> [μ½κ³  κ°λ¨ν Slack Bot λ§λ€κΈ°](https://seongsu.me/slack-bot)

<br/>

π ν€λ‘μΏ κ° μλ λ€λ₯Έ μλ²μ λ°°ν¬ν  λ `src/modules/env.ts` νμΌμ λ°°ν¬μ© μ€μ μ λ°λ‘ ν΄μΌν©λλ€

<br/>

## π€ λ΄ κ΅¬μ±

<br/>

![42Alert_FlowChart](https://user-images.githubusercontent.com/74334399/137498343-f9153426-2ce0-43a8-ac3f-35046ddf51af.png)

<br/>
