import { Input } from "@nextui-org/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";
import { InterfaceDropDown } from "./interface/InterfaceDropDown";


export interface InterfacePropsDropDown {
    id : number;
    name : string;
    value : string;
    add? : any;
}


const IDropDownMultiple = ( props : InterfaceDropDown ) => {
    const [ open, setOpen ] = useState( false );
    const [ value, setValue ] = useState<string []>( [] );
    const [ dropDownValue, setDropDownValue ] = useState<InterfacePropsDropDown[]>( [] );
    return <div className = { `relative rounded-md w-full grid gap-2` }>
        <div
            className = { `w-full` }
        >
            <Input
                helperColor = { props.error ? 'error' : 'primary' }
                helperText = { props.errorMessages }
                bordered = { true }
                clearable = { !props.disabled }
                animated = { true }
                width = "100%"
                label = { props.label }
                required = { props.required }
                onClick = { () => {
                    // setValue( undefined );
                    setOpen( true )
                } }
                readOnly = { true }
                color = { props.error ? 'error' : 'primary' }
                placeholder = { props.placeholder }
                className = { `border ${ props.error ? 'border-red-900' : 'border-primary' }  ${ props.disabled ? 'bg-gray-300' : '' }` }
                value = { props.value ?? value }
                type = { props.type }
                contentClickable = { true }
                onContentClick = { ( key, e ) => {
                    if ( !props.disabled ) {
                        if ( key === 'right' ) {
                            setOpen( !open );
                        }
                    }
                } }
                onChange = { ( value ) => {
                    if ( value.target.value === "" ) {
                        setValue( [] );
                        setDropDownValue( [] )
                        setOpen( false );
                    }
                    else {
                        setOpen( true );
                    }
                    if ( props.onValueChange ) {
                        props.onValueChange( value.target.value );
                    }
                } }
                contentRight = { <div>
                    {
                        open ? <AiFillCaretUp/> : <AiFillCaretDown/>
                    }
                </div> }
            />
        </div>
        {
            (open ? (
                <div
                    className = { `absolute top-20 bg-white max-h-48 rounded-b-lg z-50 w-full overflow-auto grid shadow-md` }
                    style = { {
                        zIndex : 9999
                    } }
                >
                    { props.children ?? props.data.map( ( data, index ) => {
                        return (
                            <div
                                key = { index }
                                onClick = { () => {
                                    setOpen( false );
                                    setValue( ( prevState ) => prevState !== undefined ? [ ...prevState, data.name ] : [ data.name ] );
                                    setDropDownValue( ( prevState ) => prevState !== undefined ? [ ...prevState, data ] : [ data ] );
                                    return props.onValueMultiple ? props.onValueMultiple( [ data, ...dropDownValue ] ) : null;
                                } }
                                className = { `w-full hover:bg-primary px-3 py-3 hover:text-white cursor-pointer` }
                            >
                                { data.name }
                            </div>
                        );
                    } ) }
                    { props.activeAddOn ? (
                        <>
                            {
                                props.data.length !== 0 ? null :
                                    <div
                                        className = "p-2 bg-primary text-white text-center mt-2 cursor-pointer"
                                        onClick = { props.onClickAddOn }
                                    >
                                        Tambah
                                    </div>
                            }
                        </>
                    ) : null }
                </div>
            ) : null)
        }
    </div>
}

export default IDropDownMultiple
