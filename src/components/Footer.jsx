import {Link} from "react-router-dom"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
  return (
    
        <div className="max-w-full border-t dark:border-t-slate-700 p-8 dark:bg-slate-900">
          <div className="felx flex-wrap justify-center text-center m-4 items-center">
            <a className="mx-3" href="https://www.instagram.com/zaki__naibi/" target="_blank"><InstagramIcon color="secondary"/></a>
            <a className="mx-3" href="https://web.facebook.com/profile.php?id=100012263082469" target="_blank"><FacebookOutlinedIcon color="primary" /></a>
            <a className="mx-3 dark:text-white" href="https://github.com/Ahamdzaki?tab=projects" target="_blank"><GitHubIcon /></a>
          </div>
        </div>
    
  )
}
