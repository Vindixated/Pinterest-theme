// ==UserScript==
// @name         Pinterest dark theme
// @version      1.0.0
// @description  Pinterest but it's night time.
// @author       Marshal
// @match        *://*.pinterest.com/*
// @match        *://*.pinterest.fr/*
// @match        *://*.pinterest.co.uk/*
// @match        *://*.pinterest.de/*
// @match        *://*.pinterest.it/*
// @match        *://*.pinterest.es/*
// @match        *://*.pinterest.ca/*
// @match        *://*.pinterest.au/*
// @match        *://*.pinterest.in/*
// @match        *://*.pinterest.jp/*
// @match        *://*.pinterest.mx/*
// @match        *://*.pinterest.br/*
// @match        *://*.pinterest.ru/*
// @match        *://*.pinterest.nl/*
// @match        *://*.pinterest.se/*
// @match        *://*.pinterest.dk/*
// @match        *://*.pinterest.no/*
// @match        *://*.pinterest.fi/*
// @match        *://*.pinterest.be/*
// @match        *://*.pinterest.pt/*
// @match        *://*.pinterest.ch/*
// @match        *://*.pinterest.at/*
// @match        *://*.pinterest.pl/*
// @match        *://*.pinterest.co.za/*
// @match        *://*.pinterest.sg/*
// @match        *://*.pinterest.hk/*
// @match        *://*.pinterest.ie/*
// @match        *://*.pinterest.nz/*
// @match        *://*.pinterest.tw/*
// @match        *://*.pinterest.kr/*
// @match        *://*.pinterest.tr/*
// @match        *://*.pinterest.gr/*
// @match        *://*.pinterest.cz/*
// @match        *://*.pinterest.hu/*
// @match        *://*.pinterest.ar/*
// @match        *pinterest.com/signup*
// @icon         https://i.pinimg.com/564x/fd/4d/d7/fd4dd7e05313900f7b392585af98f83d.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `

    :root {
    --color-background-tabs-default-base: #121212 !important;
    --color-background-tabs-default-hover: #121212 !important;
    --color-background-button-white-hover: #121212 !important;
    --color-border-container : #121212 !important;

    }

       .DUt, .fev{
       background-color : #121212 !important;
       }

        body, .ujU, .imm, .V0G {
            background-color: #121212 !important;
            color: #1f1f1f !important;
        }

        .GuY {
    background-color: #1a1a1a;
    background-color: #121212;
    }

        .X8m {
            color: #ffffff;
            background: #121212;
        }

        button, input[type=button], input[type=reset], input[type=submit]{
        background-color : #121212 !important;
        }

        .Grid__Item {
            background-color: #222 !important;
        }

        .Header, .SearchBox, .BoardListItem, .Pin, .PinHolder {
            background-color: #111 !important;
            border-color: #333 !important;
        }

        .pinDescription, .pinTitle, .pinName {
            color: #fff !important;
        }

        a {
            color: #1e90ff !important;
        }

        span, p {
            background: transparent;
            color : white;
        }

        .Eqh:hover {
            border-radius: 20px;
        }

        .hUC, ._wN, .m3n {
            background-color: var(--color-background-tabs-default-base);
            border-radius: 10px;
        }

        .Uvi, .CKL, .VvI, .fSK, .Ch2 {
            color: white;
        }

        .KS5, .Zr3, .haa, .ebZ, .uom {
            background-color: transparent;
        }

        ._2W {
            background: white;
            height: 30px;
            border-radius: 0;
        }

        .USg:hover, .m3n:hover, .Eqh:hover, .Zr3:hover, .NSs:hover, .WhU:hover {
            background-color: var(--color-background-tabs-default-hover);
        }

        .USg, .WhU, .PUS, ._74, .q9L, .NSs {
            background-color: #121212;
        }

        .ujU {
            border-radius: 0px;
        }

        input[type=search] {
        background-color: #121212 !important;
        border : transparent !important;
        color : white;
        }

        .fev {
            background-color: #121212;
            border-radius: 0px;
            border-color: transparent !important;
        }

        .Zr3:hover {
            background-color: transparent;
        }


        aside.EmojiPickerReact.epr-main {
            background-color: #121212 !important;
            border-color: #121212 !important;
            border-style: none !important;
        }

        .EmojiPickerReact .epr-search-container input.epr-search{
        background-color: #070707 !important;
        color: white !important;
        border: 1px solid #000000 !important;
        }

        .EmojiPickerReact li.epr-emoji-category>.epr-emoji-category-label, .EmojiPickerReact button.epr-emoji:hover>*{
        background-color: #121212 !important;
        }

        .LJB, .uNu {
        background-color : #121212 !important;
        border-top : #121212 !important;
        }

        .Et3:hover:not(:focus):not(.FOU){
        border-color : #121212;
        }

        .Rym{
        background-color: transparent !important;
        }
    `;

    function changeBackgroundColor() {
        const modal = document.querySelector('div[data-test-id="login-modal-default"]');
        if (modal) {
            modal.style.backgroundColor = '#121212';
        }
    }

    const observer = new MutationObserver((mutations, observer) => {
        changeBackgroundColor();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();
