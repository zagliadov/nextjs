import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { FC } from 'react';


const formControlStyle = {
    paddingBottom: '20px',
} as const;


const GoodsModalForm: FC<any> = (
    {
        setItem,
        name,
        defaultValue,
        label,
        formOption,
        empty,
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
                <option aria-label="None" value="" />
                {formOption && formOption.map((item: string) => {
                    return (
                        <option value={`${Object.keys(item)[0]}`}
                            key={Object.keys(item)[0]}>

                            {`${Object.values(item)[0]}`}
                        </option>
                    )
                })}

            </NativeSelect>
            {!empty && <p>Не заполненое поле {label}</p>}
        </FormControl>
    );
};

export default GoodsModalForm;