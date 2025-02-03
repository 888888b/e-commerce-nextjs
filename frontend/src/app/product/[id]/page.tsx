type ParamProps = {
    id: string;
};

export default async function ProductPage({ params } : { params: Promise<ParamProps> }) {
    const { id } = await params;

    return (
        <section>Pagina do produto: { id }</section>
    );
};
