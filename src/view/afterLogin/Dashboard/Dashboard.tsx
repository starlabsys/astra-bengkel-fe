import CardDashboard from "./component/CardDashboard";
import image from '../../../../public/img/icon/icon-user-dashboard.png'
import Image from "next/image";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Fragment } from "react";


const DashboardView = () => {
    return <div className = { `grid gap-5` }>
        <div className = { `laptop:hidden h-52 bg-primary rounded-lg p-5` }>
            1
        </div>
        <div className = { `w-full grid gap-5 tablet:grid-cols-2 laptop:grid-cols-4` }>
            <CardDashboard/>
            <CardDashboard/>
            <CardDashboard/>
            <CardDashboard/>
        </div>
        <div className = { `grid gap-5 laptop:flex` }>
            <div className = { `w-full h-72 rounded-lg bg-primary flex place-content-end` }>
                <Image src = { image } alt = { 'image' } className = { `w-6/12 pt-10` }/>
            </div>
            <div className = { `w-full h-72 rounded-lg bg-success` }>calender</div>
        </div>
    </div>
}
export default DashboardView
