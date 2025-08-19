interface propsGif {
    title: string;
    description?: string;
}



export const Header = ({title,description}:propsGif) => {
  return (
    <div className="content-center">
        <h1>{title}</h1>
        {
            description && <p>Descubre y comparte el gif completo</p>
        }
    </div>
  )
}
