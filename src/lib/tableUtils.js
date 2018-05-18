import XLSX from 'xlsx';
const tableUtils = {
    /**
     * 表格信息提取
     */
    getTableText(tableData) {
        let tableArr = [],
            rowArr = [];
        let preItem = {};
        for (let i = 0; i < tableData.length; i++) {
            if (preItem !== null && preItem.row !== tableData[i].row && rowArr.length > 0 ) {
                tableArr.push(rowArr);
                rowArr = [];
            }
            rowArr.push(tableData[i].text);
            preItem = tableData[i];
            if (i === tableData.length -1) {
                tableArr.push(rowArr);
            }
        }
        return  tableArr;
    },
    /**
     * 表格信息提取
     */
    getImageText(chartConf) {
        let tableArr = [];
        let series = chartConf.series||[];
        if(series.length <1){
            return tableArr;
        }
        let arr = series[0].data;
        let firstArr = [];
        firstArr.push(chartConf.xAxis.type);
        firstArr.push(series[0].name);
        tableArr.push(firstArr);
        for (let i in arr){
            let eleArr = [];
            for (let j in arr[i]){
                eleArr.push(arr[i][j]);
            }
            tableArr.push(eleArr);
        }
        for (let i =1; i < series.length;i++){
            tableArr[0].push(series[i].name);
            for (let j =0;j< series[i].data.length; j++){
                let eleArr = series[i].data[j];
                if (eleArr.length < 2){
                    tableArr[j+1].push("");
                }
                else{
                    tableArr[j+1].push(eleArr[1]);
                }
            }
        }
        return  tableArr;
    },
    /**
     * 下载表格
     */
    downloadExcel(name,data){
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile( wb, name + '.xlsx');
    }
}

export default tableUtils;