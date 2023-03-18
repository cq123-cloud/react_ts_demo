// import './comp1.modul.scss'  //全局引入

//模块化引入 == scrope
import styles from "./comp1.module.scss"
import { Button } from "antd"
function Comp1(){
    return(
        <div className={styles.box}>
            组件1
            <Button type="primary">按钮</Button>
        </div>
    )
}
export default Comp1