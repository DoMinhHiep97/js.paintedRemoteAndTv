let Remote=function () {
    this.chooseChannel=function () {
        return alert("channel: "+tv.switchChannel());
    };
    this.increaseVolume=function () {
        return alert("current volume: "+tv.increaseVolume());
    };
    this.turnOff=function () {
        return alert("Ti vi tắt :v!");
    }
};
let remote=new Remote("samSung");
let Tv=function (channel,volume,status) {
    this.channel=channel;
    this.volume=volume;
    this.status=status;
    this.currentChannel=function () {
        return alert(this.channel);
    };
    this.currentVolume=function () {
        return alert(this.volume);
    };
    this.currentStatus=function () {
        return alert(this.status);
    };
    this.switchChannel=function () {
        return this.channel=3;
    };
    this.increaseVolume=function () {
        return (this.volume+2);
    }
};
let tv=new Tv(7,20,"on");
function turnOn() {
    tv.currentStatus();
    tv.currentChannel();
    tv.currentVolume();
    remote.chooseChannel();
    remote.increaseVolume();
    remote.turnOff();
}