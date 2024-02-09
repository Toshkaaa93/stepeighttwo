import { f7 } from "framework7-react"
import { Router } from "framework7/types"

export const LoadScreen = (url:string, options?:Router.RouteOptions) => {
 f7.view.current.router.navigate(url,options)
}