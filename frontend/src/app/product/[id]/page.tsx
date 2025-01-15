export default async function ProductPage({ params } : { params: Promise<any> }) {
    const { id } = await params;

    return (
        <section>Pagina do produto: { id }</section>
    );
};
