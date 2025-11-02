import ListStyles from './List.module.css';

export const List = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div>
            <ol className={ListStyles.List}>
                {children}
            </ol>
        </div>
    )
}
