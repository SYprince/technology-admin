import * as commonFun from '/supply/pv/js/common.js'
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
        commonFun.supplyTotalOne('supplyTotalOne');
        /* supplyTotalTwo arg
        arg1 //div 的id
        arg2 //柱状图数据
        arg3 //折线图数据
        arg4  //柱状图最低值
        arg5 // 折线图最低值
        arg6 //柱状图表示
        arg7 //折线图表示
         */
        let barDataOne=[1995.17053789840,9593.55643027242,13137.2825150078,25413.0159657837,21043.2994505102,22733.6190414790,23855.6565543724,19791.3156753927,14094.33249738683];
        let lineDataOne=[0.0498703235213397,0.148491994626372,0.157014403854262,0.245612286353182,0.174138522240950,0.148372768341923,0.131937226538408,0.103001811966251,0.0690792552539317];
        commonFun.supplyTotalTwo('supplyTotalTwo',barDataOne,lineDataOne,0,0,'弃风电量','弃风率');
        let barDataTwo=[-0.648984022060176,-4.00169118709528,534.534815171515,1678.91497798403,3195.84093557992,5157.26438063698,5901.94789932638,3775.95500750872,7513.40528805696];
        let lineDataTwo=[-4.85862819120249e-05,-0.000214821320077213,0.0218163808595586,0.0581524686441115,0.0967239587458106,0.144157268155041,0.151557593230422,0.0932957577920413,0.175688859662350];
        commonFun.supplyTotalTwo('supplyTotalThree',barDataTwo,lineDataTwo,-5,-1,'弃光电量','弃光率');
        let barDataThree=[1994.52155387634,9589.55473908533,13671.8173301793,27091.9309437677,24239.1403860901,27890.8834221160,29757.6044536988,23567.2706829014,21607.7377854437]
        let lineDataThree=[0.0373754227677783,0.115211221699277,0.126390995904631,0.204716259611311,0.157516543562047,0.147574806878884,0.135414115012087,0.101313068030790,0.0875527690492762]
        commonFun.supplyTotalTwo('supplyTotalFour',barDataThree,lineDataThree,0,0,'舍弃电量','弃电率');
}
)