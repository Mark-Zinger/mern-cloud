import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function FileIcon (props) {
    switch(props.type) {
        case "dir":
            return <FolderOutlinedIcon {...props} />
        case "jpg":
        case "png":
        case "gif":
            return <ImageOutlinedIcon {...props} />
        default:
            return <InsertDriveFileOutlinedIcon {...props} />
    }
}