var formValue = this.getField("vitalidade").value;

switch (formValue) {
case 3:
    this.getField("mvitalidade").value = "-3";
break;

case 4:
case 5:
    this.getField("mvitalidade").value = "-2";
break;

case 6:
case 7:
case 8:
    this.getField("mvitalidade").value = "-1";
break;

case 9:
case 10:
case 11:
case 12:
    this.getField("mvitalidade").value = "0";
break;


case 13:
case 14:
    this.getField("mvitalidade").value = "+1";
break;

case 15:
case 16:
case 17:
    this.getField("mvitalidade").value = "+2";
break;

case 18:
    this.getField("mvitalidade").value = "+3";
break;

case 19:
case 20:
    this.getField("mvitalidade").value = "+4";
break;

case 21:
case 22:
case 23:
    this.getField("mvitalidade").value = "+5";
break;

case 24:
case 25:
case 26:
case 27:
    this.getField("mvitalidade").value = "+6";
break;

case 28:
    this.getField("mvitalidade").value = "+7";
break;

case 29:
case 30:
    this.getField("mvitalidade").value = "+8";
    break;

default:
    this.getField("mvitalidade").value = ""
break;
}
