import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
export const MUITable = ({ data, title }) => {
    var columns = [];
    const [isLoading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const noCols = ["Sin información"];
    const noData = [[""]];

    const handleClose = (r) => {
        if (r === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    if (data.length) {

        columns = Object.keys(data[0]).map((key, index) => {
            return {
                name: key,
                label: replaceAll(key, '_', ' '),
            }
        });
    };

    return (
        <>
            <MUIDataTable
                title={title}
                data={data.length ? data : noData}
                columns={columns.length ? columns : noCols}
                options={{
                    selectableRows: 'none',
                    downloadOptions: {
                        filterOptions: {
                            useDisplayedColumnsOnly: true,
                            useDisplayedRowsOnly: true,
                        }
                    }
                }}
            />
        </>
    );
}
function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}