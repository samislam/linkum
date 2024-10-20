import { StaticImageData } from 'next/image'

export interface AppConfigDef {
  appName: string
  appIcon: string | StaticImageData
}
