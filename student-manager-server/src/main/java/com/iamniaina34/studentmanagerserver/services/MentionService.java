package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Mention;
import com.iamniaina34.studentmanagerserver.repositories.MentionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MentionService {

    @Autowired
    private MentionRepository mentionRepository;

    public List<Mention> getAllMentions() {
        return mentionRepository.findAll();
    }

    public Mention getMentionById(Integer mentionId) {
        return mentionRepository.findById(mentionId).orElse(null);
    }

    public Mention createMention(Mention mention) {
        return mentionRepository.save(mention);
    }

    public Mention updateMention(Integer mentionId, Mention mentionDetails) {
        Mention mention = mentionRepository.findById(mentionId).orElse(null);
        if (mention != null) {
            // Mettre à jour les attributs selon vos besoins
            mention.setResponsable(mentionDetails.getResponsable());
            mention.setMentionAcro(mentionDetails.getMentionAcro());
            mention.setMentionDesign(mentionDetails.getMentionDesign());
            return mentionRepository.save(mention);
        }
        return null;
    }

    public void deleteMention(Integer mentionId) {
        mentionRepository.deleteById(mentionId);
    }
}
