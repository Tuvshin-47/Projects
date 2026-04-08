import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { parentService } from "../services/parentService";
import type { Child, Parent } from "../types/Parent";


const ParentDetail: React.FC = () => {
    const { id } = useParams<({ id: string })>();
    console.log(id);
    const [parent, setParent] = useState<Parent | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [children, setChildren] = useState<Child[]>([]);

    useEffect(() => {
        console.log(id);

        if (id) {
            fetchParent(parseInt(id));
            fetchChild(parseInt(id));
        }

    }, [id])

    const fetchChild = async (parentId: number) => {
        try {
            setLoading(true);
            const data = await parentService.getParentChildren(parentId);
            console.log(data);
            setChildren(data);

        } catch (error) {
            setError('Failed to fetch children of parent');
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    const fetchParent = async (parentId: number) => {
        try {
            setLoading(true);
            const data = await parentService.getParentById(parentId);
            console.log(data);

            setParent(data);

        } catch (error) {
            setError('Failed to fetch parent details');
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!parent) return <div>Parent not found!</div>
    return (
        <div className="parent-detail">
            <div className="header">
                <h2>Parent Details</h2>
                <Link to="/parents" className="btn btn-secondary">Back to List</Link>
            </div>
            <div className="parent-info">
                <h3>{`${parent?.firstName} ${parent.lastName}`}</h3>
                <p><strong>ID:</strong>{parent.id}</p>
                <p><strong>Relationship: </strong>{parent.relationship}</p>
                <p><strong>Phone: </strong>{parent.phoneNumber}</p>
                <p><strong>Email: </strong>{parent.email}</p>
                <p><strong>Address: </strong>{parent.address || 'N/A'}</p>
                <p><strong>Number of Children: </strong>{parent.childCount || 0}</p>
            </div>
            
            <div className="children-list">
                <h3>Children</h3>
                {children.length === 0 ? (
                    <p>No children found.</p>
                ) : (
                    <ul>
                        {children.map((child) => (
                            <ul key={child.id}>
                                firstName: <li>{child.firstName}</li> lastName:  <li>{child.lastName}</li>
                                Date of Birth: <li>{child.dateOfBirth}</li>
                                Gender: <li>{child.gender}</li>
                                Class: <li>{child.className}</li>
                            </ul>
                        ))}
                    </ul>
                )}
            </div>

            <div className="actions">
                <Link to={`/parents/${parent.id}/edit`} className="btn btn-warning">Edit</Link>
            </div>

            {/* Children list */}
        </div>
    )
}

export default ParentDetail