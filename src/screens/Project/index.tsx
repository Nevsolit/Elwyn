import { WrapperSection } from "~/core/components";

import { useCallback, useEffect, useMemo } from "react";
import { ITEMS_PER_PAGE } from "~/core/constants";
import { transitionPage } from "~/core/hoc";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { getFilteredCollection } from "~/core/services";
import { ProjectsActions } from "~/core/store";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import log from "~/core/utils/log";
import ListProjects from "./components/ListProjects";
import "./styles.scss";

const ProjectScreen: React.FC = () => {
    // const { t } = useTranslation("global");

    const dispatch = useAppDispatch();
    const { loading, listProjects, pagination, searchTerm, sortOrder } = useAppSelector((state) => state.root.projects);

    const fetchProjects = useCallback(async () => {
        dispatch(ProjectsActions.update({ loading: true }));
        try {
            let fetchedBlogs: ProjectsEntity[];

            // Fetch tất cả blogs
            fetchedBlogs = (await getFilteredCollection("projects", "timeCreated", ">=", "")) as ProjectsEntity[];

            // Lọc blogs theo searchTerm nếu có
            if (searchTerm) {
                const lowerSearchTerm = searchTerm.toLowerCase();
                fetchedBlogs = fetchedBlogs.filter((blog) => blog.title.toLowerCase().includes(lowerSearchTerm));
            }

            // Sắp xếp blogs
            fetchedBlogs.sort((a, b) => {
                const comparison = new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime();
                return sortOrder === "newest" ? comparison : -comparison;
            });

            dispatch(
                ProjectsActions.update({
                    listProjects: fetchedBlogs,
                    pagination: {
                        currentPage: 1,
                        totalPages: Math.ceil(fetchedBlogs.length / ITEMS_PER_PAGE),
                    },
                }),
            );
        } catch (error) {
            log("error", "Error fetching projects:", error);
        } finally {
            dispatch(ProjectsActions.update({ loading: false }));
        }
    }, [dispatch, sortOrder, searchTerm]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const currentProjects = useMemo(() => {
        const startIndex = (pagination.currentPage - 1) * ITEMS_PER_PAGE;

        return listProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [listProjects, pagination.currentPage]);

    const handlePageChange = useCallback(
        (page: number) => {
            dispatch(
                ProjectsActions.update({
                    pagination: {
                        ...pagination,
                        currentPage: page,
                    },
                }),
            );
        },
        [dispatch, pagination],
    );

    return (
        <div className="projects__container">
            <WrapperSection>
                {/* <Flex direction={"column"} gap={"8"} className="w-full">
                    <HeadProjects />
                    <ListProjects
                        list={currentProjects}
                        loading={loading}
                        totalPages={pagination.totalPages}
                        currentPage={pagination.currentPage}
                        onPageChange={handlePageChange}
                    />
                </Flex> */}
                <div className="projects__container__wrapper">
                    <div className="projects__container__wrapper__title">
                        <h1>
                            Ấn tượng trong từ
                            <br /> <span>cái nhìn.</span>
                        </h1>
                        <p>
                            Nhà tư duy chiến lược tạo ra những thiết kế sạch sẽ, hiệu quả, kết hợp nhuần nhuyễn sự hài
                            lòng của người dùng với thành công trong kinh doanh.
                        </p>
                    </div>
                    <div className="projects__container__wrapper__priciples">
                        <h1>Nguyên tắc thiết kế của tôi</h1>
                        <div className="projects__container__wrapper__priciples__list">
                            <div className="projects__container__wrapper__priciples__list__item">
                                <img
                                    src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b54aa4a07bb1accdd4d_DesignPrinciple_04.png"
                                    alt=""
                                />
                                <h2>'Kaizen'</h2>
                                <p>
                                    Từ "Kaizen" có nghĩa là cải tiến liên tục. Đừng bao giờ chấp nhận sự tầm thường—Luôn
                                    có chỗ để làm cho thiết kế của chúng ta tốt hơn, mỗi lần lặp lại một lần.
                                </p>
                            </div>
                            <div className="projects__container__wrapper__priciples__list__item">
                                <img
                                    src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b53db7d721830966108_DesignPrinciple_03.png"
                                    alt=""
                                />
                                <h2>Con người, không phải người dùng</h2>
                                <p>
                                    Thiết kế tốt cân bằng giữa tính thẩm mỹ và chức năng trong khi vẫn thể hiện sự đồng
                                    cảm với cảm xúc, hành vi và công việc cần hoàn thành của người dùng.
                                </p>
                            </div>
                            <div className="projects__container__wrapper__priciples__list__item">
                                <img
                                    src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b5398a7e2ef2f75fbee_DesignPrinciple_02.png"
                                    alt=""
                                />
                                <h2>Chi tiết, chi tiết và chi tiết</h2>
                                <p>
                                    Chi tiết thiết kế của sản phẩm phản ánh thương hiệu của sản phẩm. Từ khoảng cách,
                                    kiểu chữ, kích thước thành phần đến bản sao siêu nhỏ, mỗi yếu tố đều phải được chế
                                    tác tỉ mỉ.
                                </p>
                            </div>
                            <div className="projects__container__wrapper__priciples__list__item">
                                <img
                                    src="https://cdn.prod.website-files.com/60c5f64abe141da7260da0b9/64f81b53694f17667854f460_DesignPrinciple_01.png"
                                    alt=""
                                />
                                <h2>Thật bất ngờ!</h2>
                                <p>
                                    Tương tác tinh tế, hoạt ảnh vui nhộn và bản sao sáng tạo—Những yếu tố thiết kế nhỏ
                                    như thế này tạo ra trải nghiệm người dùng kỳ diệu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ListProjects
                        list={currentProjects}
                        loading={loading}
                        totalPages={pagination.totalPages}
                        currentPage={pagination.currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectScreen });
