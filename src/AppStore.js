import React, { Component } from 'react';

import { observable, autorun, action, computed } from 'mobx';

class Store {
    //Array of pages & their data
    @observable pageList = [

    ];

    @observable pageListTest = [
        {title: "FauxPas"}
    ];

    @observable pageInfo = [
        {id: 0, title: "Title", subTitle: "subTitle"},
        {id: 1, title: "Title23", subTitle: "subTitle2"}
    ];



    @observable localTitle = '';

    @observable localSubTitle = '';

    @observable pageId = 0;

    @observable IndexTA = this.pageInfo.find(pageInfo => pageInfo.id === this.pageId)


    constructor() {
        autorun(() => console.log(this.IndexTA = this.pageList.find(pageList => pageList.id === this.pageId)));
    }

    @observable count1 = 1




    @action addPage(title, subTitle) {
        this.pageList.push({
            id: this.pageId,
            title: title,
            subTitle: subTitle
        });

        this.frontPage();

        return this.pageList.length;
    }

    @action addCount = () => {
        this.count1 = 10;
    }

    @action dedCount = () => {
        this.count1 = 0;
    }

    @action frontPage = () => {
        this.pageId += 1;
        console.log();
    }

    @action backPage = () => {
        this.pageId -= 1;
        console.log();
    }

    @computed get report() {
        return "hello";
    }




}


const ObservablePageStore = new Store()

export {
    ObservablePageStore
}