import React, { useState } from 'react';
import AssignAgentModal from './AssignAgentModal';
import ChatApp from '../../setting/chatsModel/ChatApp';

interface SupportRowProps {
  displayData: {
    name: string;
    ticket: string;
    service: string;
    priorityColor: string;
    priority: string;
    date: string;
  };
  index: number;
}

const SupportRow: React.FC<SupportRowProps> = ({ displayData, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [assignedAgent, setAssignedAgent] = useState<string | null>(null);

  const openAssignModal = (ticket: any) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleAgentAssignment = (values: { agent: string }) => {
    setAssignedAgent(values.agent);
    setShowModal(false);
    setShowChat(true); // Open chat after assigning agent
  };

  const agentFilter = {
    options: [
      { value: 'alex', name: 'Alex' },
      { value: 'john', name: 'John' },
      { value: 'sam', name: 'Sam' },
      { value: 'alexander', name: 'Alexander' },
      { value: 'alfred', name: 'Alfred' },
    ],
    selected: 'agent',
    placeholder: 'Select an agent',
  };

  return (
    <>
      <tr
        className={`hover:bg-green-800 hover:cursor-pointer ${
          index % 2 === 0 ? 'bg-green-950' : ''
        }`}
      >
        <td className="px-4 py-2">
          <div className="flex items-center gap-4 px-4 py-2">
            <input type="checkbox" />
            <div className="flex items-center gap-4">
              <img
                src={`https://randomuser.me/api/portraits/${
                  index % 2 !== 0 ? 'women' : 'men'
                }/4${index}.jpg`}
                alt={displayData.name}
                width="30"
                className="rounded-full"
              />
              <div>
                <h1 className="font-bold">{displayData.name}</h1>
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">{displayData.ticket}</td>
        <td className="px-4 py-2">{displayData.service}</td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-sm ${displayData.priorityColor}`}
            ></div>
            <span>{displayData.priority}</span>
          </div>
        </td>
        <td className="px-4 py-2">{displayData.date}</td>
        <td className="px-4 py-2 text-center">
          {assignedAgent ? assignedAgent : '-'}
        </td>
        <td className="px-4 py-2 text-center">
          <button
            onClick={() => openAssignModal(displayData)}
            className="border border-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            Open Chat
          </button>
        </td>
      </tr>

      {showModal && (
        <AssignAgentModal
          closeModal={() => setShowModal(false)}
          onSubmit={handleAgentAssignment}
          ticketNumber={selectedTicket?.ticket}
          agentOptions={agentFilter.options}
        />
      )}

      {showChat && (
        <ChatApp
          ticket={selectedTicket}
          closeModal={() => setShowChat(false)}
          assignedAgent={assignedAgent}
        />
      )}
    </>
  );
};

export default SupportRow;