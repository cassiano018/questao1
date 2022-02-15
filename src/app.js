import { LightningElement } from "lwc";

export default class App extends LightningElement {

  cod = "c-001";
	nome = "Cassiano";
	phone = "(xx) 1122-3344";
	email = "email1@gmail.com";
	rating = "False";
  visible = false;

  cod2 = "c-002";
	nome2 = "Sara";
	phone2 = "(xx) 9988-7766";
	email2 = "email2@gmail.com";
	rating2 = "True";
  visible2 = true;
  
  trocarDic(){
		if(this.visible == true){
			this.visible = false;
    }else{
      this.visible = true;
		}
	}

}
