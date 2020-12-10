import './Base.css';
import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    return () => window.scroll(0,0);
  }, [])
  return (
    <div className="loading">Loading&#8230;</div>
  )
}

export default Loading;