import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { FC } from 'react';


const formControlStyle = {
    paddingTop: '20px',
} as const;


const GoodsModalForm: FC<any> = (
    {
        setItem,
        name,
        defaultValue,
        label,
        formOption
    }) => {

    const handleSet = (e, setItem) => {
        setItem(e.target.value)
    }


    return (
        <FormControl sx={formControlStyle}
            onChange={(e) => handleSet(e, setItem)}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {label}
            </InputLabel>
            <NativeSelect
                defaultValue={`${defaultValue}`}
                inputProps={{
                    name: name,
                    id: 'uncontrolled-native',
                }}
            >
                {formOption && formOption.map((item: string) => {
                    return (
                        <option value={`${Object.keys(item)[0]}`}
                            key={Object.keys(item)[0]}>
                                
                            {`${Object.values(item)[0]}`}
                        </option>
                    )
                })}

            </NativeSelect>
        </FormControl>
    );
};

export default GoodsModalForm;