import {CircularProgress} from "@mui/material";

export default function PageLoader() {
    return(
        <div
            style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress size={60}/>
        </div>
    );
}