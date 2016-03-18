/* Created by Administrator on 2015/11/25 0025.*/
/*component*/
var Component01 = React.createClass({
    render:function(){
        return (<div className="comp">
                    <strong>Component01</strong>
                    <ul>
                        <li>11111</li>
                        <li>22222</li>
                        <li>333333</li>
                        <li>111444444411</li>
                    </ul>
                </div>)
    }
});
var Component02 = React.createClass({
    render:function(){
        return (<div className="comp">
            <strong>Component02</strong>
            <ul>
                <li>qqweerr</li>
                <li>2344324</li>
                <li>qqwweessdd</li>
                <li>234234234234</li>
            </ul>
        </div>)
    }
});
var Component03 = React.createClass({
    render:function(){
        return (<div className="comp">
                    <strong>Component03</strong>
                    <div>
                        <span>要理解闭包，首先必须理解Javascript特殊的变量作用域。变量的作用域无非就是两种：全局变量和局部变量。Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。</span>
                    </div>
                </div>)
    }
});
var Component04 = React.createClass({
    render:function(){
        return (<div className="comp">
            <strong>Component04</strong>
            <div>
                <span>父对象的所有变量，对子对象都是可见的,子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。要理解闭包，首先必须理解Javascript特殊的变量作用域。变量的作用域无非就是两种：全局变量和局部变量。Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。</span>
            </div>
        </div>)
    }
});
var Component05 = React.createClass({
    render:function(){
        return (
            <div className="comp">
                <strong>Component05</strong>
                <div>
                    <p>JavaScript闭包闭包闭包</p>
                    <span>Component05子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。要理解闭包，首先必须理解Javascript特殊的变量作用域。变量的作用域无非就是两种：全局变量和局部变量。Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。</span>
                </div>
            </div>)
    }
});
var Component06 = React.createClass({
    render:function(){
        return (<div className="comp">
                    <strong>Component06</strong>
                    <div>
                        <div className="input"><input type="text" defalutValue="" /></div>
                        <span>子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。要理解闭包，首先必须理解Javascript特殊的变量作用域。变量的作用域无非就是两种：全局变量和局部变量。Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。</span>
                    </div>
                </div>)
    }
});
var Component07 = React.createClass({
    render:function(){
        return (<div className="comp">
            <strong>Component07</strong>
            <div>
                <div className="input"><input type="text" defalutValue="" /></div>
                <ul>
                    <li>234234</li>
                    <li>2344324</li>
                    <li>2342324</li>
                    <li>234234234234</li>
                </ul>
            </div>
        </div>)
    }
});
/*box*/
var LeftBox = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share01'},
        ref:"leftbox",
        model:"item"
    },
    getInitialState: function() {
        return {
            item: [<Component01 />, <Component02 />,<Component03 />,<Component04 /> ,<Component07 />]
        };
    },
    render:function(){
        return(
            <div id="left" ref="leftbox">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>)
    }
});
var RightBox = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share01'},
        ref:"leftbox",
        model:"item"
    },
    getInitialState: function() {
        return {
            item: [<Component03 />,<Component05 /> ,<Component06 />]
        };
    },
    render:function(){
        return(
            <div id="right" ref="leftbox">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>)
    }
});
var MiddleBox01 = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share01'},
        ref:"middle01",
        model:"item"
    },
    getInitialState:function(){
        return {
            item: [<Component05 />,<Component06 /> ,<Component07 />]
        };
    },
    render:function(){
        return(
            <div id="middle01" ref="middle01">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>
        )
    }
});
var BlockBox01 = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share02'},
        ref:"BlockBox01",
        model:"item"
    },
    getInitialState:function(){
        return {
            item: [<Component04 />,<Component05 />,<Component06 /> ,<Component07 />]
        };
    },
    render:function(){
        return(
            <div className="block mr_10" ref="block01">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>
        )
    }
});
var BlockBox02 = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share02'},
        ref:"BlockBox02",
        model:"item"
    },
    getInitialState:function(){
        return {
            item: [<Component01 />,<Component03 />,<Component05 />,<Component06 /> ,<Component07 />]
        };
    },
    render:function(){
        return(
            <div className="block" ref="block02">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>
        )
    }
});
var Mar_right = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share01'},
        ref:"oth_right",
        model:"item"
    },
    getInitialState:function(){
        return {
            item: [<Component01 />,<Component04 />,<Component07 />,<Component02 /> ,<Component03 />]
        };
    },
    render:function(){
        return(
            <div id="oth_rigth" ref="oth_right">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>
        )
    }
});
var Mar_left = React.createClass({
    mixins: [SortableMixin],
    sortableOptions:{
        group:{name:'share01'},
        ref:"oth_left",
        model:"item"
    },
    getInitialState:function(){
        return{item:[<Component03 /> ,<Component05 /> ,<Component06 />]}
    },
    render: function () {
        return(
            <div id="oth_left" ref="oth_left">
                {this.state.item.map(function(text){
                    return(<div>{text}</div>)
                })}
            </div>
        )
    }
});
/*module*/
var ModuleOne = React.createClass({
    render:function(){
        return(
            <div id="module01" className="clear">
                <LeftBox />
                <RightBox />
                <MiddleBox01 />
            </div>)
    }
});
var ModuleTwo = React.createClass({
    render:function(){
        return(
            <div id="module02" className="clear">
                <BlockBox01 />
                <BlockBox02 />
            </div>
        )
    }
});
var ModuleThree = React.createClass({
    render:function(){
        return(
            <div id="module03" className="clear">
                <LeftBox />
                <Mar_right />
            </div>
        )
    }
});
var ModuleFour = React.createClass({
    render:function(){
        return(
            <div id="module04" className="clear">
                <RightBox />
                <Mar_left />
            </div>
        )
    }
});
var ModulesArray = [<ModuleOne />,<ModuleTwo />,<ModuleThree />,<ModuleFour/>];
/*button*/
var FirstBtn = React.createClass({
    getInitialState : function(){
        return {num : 0}
    },
    componentDidMount:function(){
         firstBtnNode = this.refs.firstBtn
    },
    getBtnValue:function(){
        this.setState({num:firstBtnNode.value});
        this.props.topClick(this.state.num);
    },
    render: function () {
        return(<button ref="firstBtn" onClick={this.getBtnValue} value="0">1:2:1</button>)
    }
});
var SecondBtn = React.createClass({
    getInitialState: function () {
        return { num : 1}
    },
    componentDidMount:function(){
        secondBtnNode = this.refs.secondBtn
    },
    getBtnValue:function(){
        this.setState({num:secondBtnNode.value});
        this.props.topClick(this.state.num);
    },
    render: function () {
        return(<button ref="secondBtn" onClick={this.getBtnValue} value="1" >1:1</button>)
    }
});
var ThirdBtn = React.createClass({
    getInitialState: function () {
        return { num : 2}
    },
    componentDidMount:function(){
        thirdBtnNode = this.refs.thirdBtn
    },
    getBtnValue:function(){
        this.setState({num:thirdBtnNode.value});
        this.props.topClick(this.state.num);
    },
    render: function () {
        return(<button ref="thirdBtn" onClick={this.getBtnValue} value="2">1:2</button>)
    }
});
var FourthBtn = React.createClass({
    getInitialState: function () {
        return { num : 3}
    },
    componentDidMount:function(){
        fourthBtnNode = this.refs.fourthBtn
    },
    getBtnValue:function(){
        this.setState({num:fourthBtnNode.value});
        this.props.topClick(this.state.num);
    },
    render: function () {
        return(<button ref="fourthBtn" onClick={this.getBtnValue} value="3">2:1</button>)
    }
});
var SaveBtn = React.createClass({
    render:function(){
        return(<button>保存</button>)
    }
});
/*TOP*/
var TopBox = React.createClass({
    getInitialState : function(){
        return {m : 0}
    },
    handleClick: function (x) {
        this.setState({m:x} );
        this.props.mainhandleChange(this.state.m);
    },
    render:function(){
        return(
            <div id="top">
                <FirstBtn topClick={this.handleClick} />
                <SecondBtn topClick={this.handleClick} />
                <ThirdBtn topClick={this.handleClick} />
                <FourthBtn topClick={this.handleClick} />
                <SaveBtn />
            </div>)
    }
});
var MainPage = React.createClass({
    getInitialState:function(){
        return{no:0}
    },
    mainChange:function(x){
        this.setState({no:x});
    },
    render: function () {
        return(
            <div>
                <h3>双击改变排版,还不能保存</h3>
                <TopBox mainhandleChange={this.mainChange} />
                <div id="box">
                    {ModulesArray[this.state.no]}
                </div>
            </div>)
    }
});
var OutPut = ReactDOM.render(
        <MainPage />,
        document.getElementById('main')
);



