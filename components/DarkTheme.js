function DarkTheme() {
    return (
        <style jsx global>{`
          :root {
            --background-color: rgb(41, 41, 41);
            --link-color: rgb(218, 177, 17);
            --text-color: rgb(193, 193, 193);
          }
        `}</style>
    )
}

export default DarkTheme;