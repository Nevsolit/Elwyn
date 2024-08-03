import { memo } from "react";
import { ItemProject, PaginationCustom, WrapperLayoutPresent } from "~/core/components";
import fakeData from "~/core/utils/fakeData";

const ListProjects = memo(() => {
    return (
        <div className="group__column__center w-full gap-8">
            <WrapperLayoutPresent type="row">
                {fakeData(10).map((_, index) => (
                    <ItemProject key={`item-project-${index}`} />
                ))}
            </WrapperLayoutPresent>
            <PaginationCustom currentPage={1} totalPages={20} onPageChange={(page) => console.log(page)} />
        </div>
    );
});

export default ListProjects;
