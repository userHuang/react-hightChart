export const dateType = {
    none:"不限",
    today : "今天",
    yesterday:"昨天",
    lastSevenDay:"近7天",
    lastMonth:"近30天",
    lastThreemonth:"近三个月",
    lastSixMonth:"近半年",
    lastYear:"近一年",
};
export const pageType = {
    pageOne: "不限",
    pageTwo:"10页以下",
    pageThree:"10-20页",
    pageFour:"20页以上",
};
export const chartColor= [{
     key:"color0",
     icon :"icon-color0",
     name: "默认色",
    colors: ["#5182e4","#f48122","#9acb66",  "#51b4f0", "#69d4db", "#3fb27e","#f8cc4a", "#f2f352", "#D42D6B", "#ce63d6", "#8853d4", "#5155b7"]
}, {
    key:"color1",
    icon :"icon-color1",
    name: "经典绿",
    colors: ["#0a623d", "#149448", "#3fb27e", "#b7cc42", "#d1ea57", "#7fad9c", "#aecdc3", "#b4baa5"]
}, {
    key:"color2",
    icon :"icon-color2",
    name: "落叶黄",
    colors: ["#e5592d", "#fd9827", "#fed44f", "#e1d09f", "#994d2e", "#e29971", "#da5546", "#dba946"]
}, {
    key:"color3",
    icon :"icon-color3",
    name: "高贵紫",
    colors: ["#5155b7", "#7260b0", "#a562ab", "#ce63d6", "#8853d4", "#a145c9", "#6e5ce7"]
}, {
    key:"color4",
    icon :"icon-color4",
    name: "对比蓝",
    colors: ["#5155b7", "#5182e4", "#51b4f0", "#51d2b4", "#fdb730", "#f48122"]
}, {
    key:"color5",
    icon :"icon-color5",
    name: "对比绿",
    colors: ["#0a623d", "#149448", "#3fb271", "#87cc42", "#d1ea57", "#7fad9c", "#c7cbab", "#f48122", "#fdb730"]
}, {
    key:"color6",
    icon :"icon-color6",
    name: "对比紫",
    colors: ["#5155b7", "#7260b0", "#a562ab", "#d3c2da", "#ce63d6", "#87cc42", "#fdb730"]
}, {
    key:"color7",
    icon :"icon-color7",
    name: "商务灰",
    "colors": ["#5a6a7b", "#9eb1bd", "#5c6a86", "#898e94", "#cbd3da", "#5571A5"]
}, {
    key:"color8",
    icon :"icon-color8",
    name: "高端金",
    colors: ["#99804D", "#BAA588", "#E1D09F", "#DBA946", "#C3A672", "#E8CD71"]
}]

export const chartType =[
    {type:"line",icon:"line-chart",name:"折线图"},
    {type:"scatter",icon:"scatter-chart",name:"散点图"},
    {type:"column",icon:"column-chart",name:"柱状图"},
    {type:"area",icon:"area-chart",name:"面积图"},
    {type:"bar",icon:"bar-chart",name:"条形图"},
    {type:"pie",icon:"pie-chart",name:"饼图"},
];