import Request from "@/utils/request";

export function getTableList() {
    return Request.request(
        {
            url: '/queryDataList',
            method: 'get',
            // data
        }
    );
}