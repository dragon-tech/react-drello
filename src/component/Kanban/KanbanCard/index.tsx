import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { RiDragDropLine } from "react-icons/ri";
import TaskCard from "../TaskCard";
import { Task } from "../../../data/initial-data";

type KanbanCardProps = {
    id: string;
    title: string;
    tasks: Task[];
}

const KanbanCard: React.FC<KanbanCardProps> = ({ id, title, tasks = []}) => {
    return (
        <Box width="270px" p={2} bg="blue.100" rounded={4}>
            <Flex direction="column">
                <Box mb={2}>
                    <Text fontSize="lg" fontWeight={500} color="gray.900" isTruncated>
                        {title}
                    </Text>
                </Box>
                <Droppable droppableId={id}>
                    {(provided, snapshot) => (                       
                        <VStack 
                            justifyContent={tasks.length > 0 ? "none" : "center"}
                            alignItems={tasks.length > 0 ? "none" : "center"}
                            minHeight={tasks.length > 0 ? "none" : "60px"}
                            border ={snapshot.isDraggingOver || tasks.length > 0 ? "none" : "1.5px dashed gray" }
                            flex={1} 
                            rounded={2}
                            backgroundColor= {snapshot.isDraggingOver ? "blue.200" :"blue.50"}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tasks.length > 0 ? (
                                tasks.map((task,index) => (
                                    <TaskCard 
                                        key={task.id}
                                        id={task.id}
                                        content={task.content}
                                        index={index}
                                    />
                                ))
                            ): (
                                <Box 
                                    as={RiDragDropLine}
                                />
                            ) }
                            {provided.placeholder}
                        </VStack>
                    )}      
                </Droppable>
            </Flex>
        </Box>
    )
}

export default KanbanCard;